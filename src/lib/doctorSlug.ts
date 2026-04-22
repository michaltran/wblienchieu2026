export function parseDoctorSlug(slug: string): { slug?: string; externalId?: string } {
    // Check for Vinmec-like pattern: ending with "-{id}-vi" or similar
    // We assume the pattern is roughly: ...slug...-{id}-vi
    // Example: do-tat-cuong-416-vi => id: 416
    
    const vinmecPattern = /^(.*)-(\d+)-vi$/;
    const match = slug.match(vinmecPattern);
    
    if (match) {
        return {
            slug: match[1], // "do-tat-cuong" (might not exact match our slug, but useful fallback)
            externalId: match[2] // "416"
        };
    }
    
    return { slug };
}

export function createDoctorUrl(slug: string, externalId?: string | number): string {
    if (externalId) {
        return `/chuyen-gia-y-te/${slug}-${externalId}-vi`;
    }
    return `/chuyen-gia-y-te/${slug}`;
}
