var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"en-us\">';
xmlSynonymsData += '    <Groups />';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym From=\"elearning\" To=\"e-learn\" />';
xmlSynonymsData += '        <DirectionalSynonym From=\"e learning\" To=\"e-learn\" />';
xmlSynonymsData += '        <DirectionalSynonym From=\"donnely\" To=\"donnelley\" />';
xmlSynonymsData += '        <DirectionalSynonym From=\"donelly\" To=\"donnelley\" />';
xmlSynonymsData += '        <DirectionalSynonym From=\"donneley\" To=\"donnelley\" />';
xmlSynonymsData += '        <DirectionalSynonym From=\"donelley\" To=\"donnelley\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);
