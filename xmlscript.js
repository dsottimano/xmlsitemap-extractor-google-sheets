/* ---------------------------------------------------------------------------
* Sitemap extractor (Google sheets)
*
* @desc    Extracts urls from XML sitemap index or sitemap files
* @author  Dave Sottimano @dsottimano Twitter
* @license MIT (http://www.opensource.org/licenses/mit-license.php)
* @version 1.0
* -------------------------------------------------------------------------*/

/**
* Returns URLs in sitemap.xml file or sitemap index file
*
* @param {"https://www.google.com/gmail/sitemap.xml"} sitemapUrl REQUIRED The url of the sitemap
* @return Returns urls <loc> from an xml sitemap
* @customfunction
*/

function EXTRACT_SITEMAP(sitemapUrl) {
  try {

    var xml = UrlFetchApp.fetch(sitemapUrl,{muteHttpExceptions:true});
    var document = XmlService.parse(xml.getContentText());
    var root = document.getRootElement()
    var namespace = root.getNamespace().getURI()
    var sitemapNameSpace = XmlService.getNamespace(namespace);
    let urls = root.getChildren('url',sitemapNameSpace)[0] ? root.getChildren('url', sitemapNameSpace) : root.getChildren('sitemap', sitemapNameSpace);
    var locs = []
    
    for (var i=0;i <urls.length;i++) {
      locs.push(urls[i].getChild('loc', sitemapNameSpace).getText()) 
    }
    
    return locs  
  } catch (e) {
    console.log(e)
    if (e.toString().includes("The markup in the document preceding the root element must be well-formed")) return "Parsing error: is this a valid XML sitemap?";
    return e.toString() 
  }
}
