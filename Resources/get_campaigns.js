module.exports = async (params) => {
    // 1. Hook into Dataview
    const dv = app.plugins.plugins.dataview?.api;
    if (!dv) return;

    // 2. Scan the vault for every existing 'campaign' property
    let campaigns = dv.pages().campaign.array().flat().filter(c => c != null);
    
    // 3. Remove duplicates and sort them alphabetically
    let uniqueCampaigns = [...new Set(campaigns)];
    uniqueCampaigns.sort();

    // 4. Show the dynamic dropdown menu
    const selected = await params.quickAddApi.suggester(uniqueCampaigns, uniqueCampaigns);
    if (!selected) return;

    // 5. Ask for the Session Number
    const sessionName = await params.quickAddApi.inputPrompt("Session Number or Name (e.g., 4 or Honey Heist):");
    if (!sessionName) return;

    // 6. Save these values to pass to your template
    params.variables = {
        campaignName: selected,
        sessionNumber: sessionName
    };
};
