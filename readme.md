## Functions

<dl>
<dt><a href="#sitemap">sitemap(sitemapUrl)</a> ⇒</dt>
<dd><p>Returns URLs in sitemap.xml index or xml file</p>
</dd>
</dl>

<a name="sitemap"></a>

## sitemap(sitemapUrl, namespace) ⇒
Returns URLs in sitemap.xml file

**Kind**: global function
**Returns**: Returns urls <loc> from an xml sitemap
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| sitemapUrl | <code>&quot;https://www.google.com/gmail/sitemap.xml&quot;</code> | REQUIRED The url of the sitemap |

<a name="sitemapIndex"></a>

## sitemapIndex(sitemapIndexUrl, namespace) ⇒
Returns URLs in sitemap index file

**Kind**: global function
**Returns**: Returns urls <loc> from an xml sitemap
**Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| sitemapIndexUrl | <code>&quot;https://www.google.com/sitemap.xml&quot;</code> | REQUIRED The url of the sitemap |
| namespace | <code>&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;</code> | REQUIRED Look at the source of the xml sitemap, look for the xmlns value |
