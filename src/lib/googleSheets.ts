import { type ServicePrice } from "../data/servicePrices";

export async function fetchPricingFromSheet(sheetId: string, gid: string = "0"): Promise<ServicePrice[]> {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error("Failed to fetch Google Sheet");
    }

    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error loading pricing from sheet:", error);
    throw error;
  }
}

function parseCSV(csvText: string): ServicePrice[] {
  const lines = csvText.split(/\r?\n/);
  const data: ServicePrice[] = [];

  // Assuming first line is header, skip it
  // Expected columns: Code, Name, Unit, Price, InsurancePrice, Category
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cols = parseCSVLine(line);
    
    // Basic validation
    if (cols.length < 5) continue;

    const [code, name, unit, priceStr, insurancePriceStr, category] = cols;

    // Map category string to union type
    let mappedCategory: ServicePrice["category"] = "thu-thuat";
    const catLower = category?.toLowerCase().trim();
    
    if (catLower?.includes("khám") || catLower === "kham-benh") mappedCategory = "kham-benh";
    else if (catLower?.includes("xét nghiệm") || catLower === "xet-nghiem") mappedCategory = "xet-nghiem";
    else if (catLower?.includes("hình ảnh") || catLower === "chan-doan-hinh-anh") mappedCategory = "chan-doan-hinh-anh";

    // Parse prices (remove commas/dots if formatted in sheet)
    const price = parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
    const insurancePrice = parseInt(insurancePriceStr?.replace(/[^0-9]/g, "") || "0") || undefined;

    data.push({
      id: `sheet-${i}`,
      code: code.trim(),
      name: name.trim(),
      unit: unit.trim(),
      price,
      insurancePrice,
      category: mappedCategory
    });
  }

  return data;
}

// Simple CSV line parser that handles quoted values
function parseCSVLine(text: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}
