<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>SmartFits Products Stocks</title>
            </head>
            <style>
                td{
                    font-weight:bolder;
                    background-color: pink;
                    text-align: center;
                }
            </style>
            <body style="background-image: url(../images/xmlbg.jpg);">
                <h1 align= "center" style="color:black;">SmartFits Products Stocks</h1>
                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Shirt Stocks</caption>
                    <tr bgcolor="black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Cost</th>
                        <th>Availability</th>
                    </tr>
                    <xsl:for-each select="Products/Shirts">
                        <tr>
                            <td><xsl:value-of select="Brand"/></td>
                            <td><xsl:value-of select="Size"/></td>
                            <td><xsl:value-of select="Cost"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Pant Stocks</caption>
                    <tr bgcolor= "black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Cost</th>
                        <th>Availability</th>
                    </tr>
                    <xsl:for-each select="Products/Pants">
                        <tr>
                            <td><xsl:value-of select="Brand"/></td>
                            <td><xsl:value-of select="Size"/></td>
                            <td><xsl:value-of select="Cost"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Watch Stocks</caption>
                    <tr bgcolor="black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Cost</th>
                        <th>Availability</th>
                    </tr>
                    <xsl:for-each select="Products/Watches">
                        <tr>
                            <td><xsl:value-of select="Brand"/></td>
                            <td><xsl:value-of select="Size"/></td>
                            <td><xsl:value-of select="Cost"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>