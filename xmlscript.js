/**
* Returns URLs in sitemap.xml file
*
* @param {"https://www.google.com/gmail/sitemap.xml"} sitemapUrl REQUIRED The url of the sitemap
* @param {"http://www.sitemaps.org/schemas/sitemap/0.9"} namespace REQUIRED Look at the source of the xml sitemap, look for the xmlns value 
* @return Returns urls <loc> from an xml sitemap
* @customfunction
*/

function sitemap(sitemapUrl,namespace) {
  
  try {
    var xml = UrlFetchApp.fetch(sitemapUrl).getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement()
    var sitemapNameSpace = XmlService.getNamespace(namespace);
    
    var urls = root.getChildren('url', sitemapNameSpace)
    var locs = []
    
    for (var i=0;i <urls.length;i++) {
      locs.push(urls[i].getChild('loc', sitemapNameSpace).getText()) 
    }
    
    return locs  
  } catch (e) {
    return e 
  }
}


/**
* Returns URLs in sitemap index file
*
* @param {"https://www.google.com/sitemap.xml"} sitemapIndexUrl REQUIRED The url of the sitemap
* @param {"http://www.sitemaps.org/schemas/sitemap/0.9"} namespace REQUIRED Look at the source of the xml sitemap, look for the xmlns value 
* @return Returns urls <loc> from an xml sitemap
* @customfunction
*/

function sitemapIndex(sitemapIndexUrl,namespace) {
  
  try {
    var xml = UrlFetchApp.fetch(sitemapIndexUrl).getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement()
    var sitemapNameSpace = XmlService.getNamespace(namespace);
    
    var urls = root.getChildren('sitemap', sitemapNameSpace)
    var locs = []
    
    for (var i=0;i <urls.length;i++) {
      locs.push(urls[i].getChild('loc', sitemapNameSpace).getText()) 
    }
    
    return locs  
  } catch (e) {
    return e 
  }
}
