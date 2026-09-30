module.exports = async (params) => {
    const { app } = params;
    
    // 1. Ask for the file name
    const sessionName = await params.quickAddApi.inputPrompt("Which session? (e.g., JtH Session 3)");
    if (!sessionName) return;
    
    // 2. Scan the vault for it (ignoring uppercase/lowercase)
    const file = app.vault.getMarkdownFiles().find(f => f.basename.toLowerCase() === sessionName.toLowerCase());
    
    if (!file) {
        new Notice("Could not find that session file. Check your spelling!");
        return;
    }
    
    // 3. Ask for the hours
    const hours = await params.quickAddApi.inputPrompt("How many hours did you play?");
    if (!hours) return;
    
    // 4. Inject it into the properties
    await app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter["hours_played"] = parseFloat(hours);
        frontmatter["date"] = window.moment().format("YYYY-MM-DD");
    });
    
    new Notice(`Success! Added ${hours} hours to ${file.basename}`);
};
