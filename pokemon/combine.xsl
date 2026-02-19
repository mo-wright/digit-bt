<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    <xsl:output method="text" indent="yes"/>
    <xsl:variable name="corpus" as="document-node()+" select="collection('formatted/?select=*xml')"/>
    
    <xsl:template match="/">
        <xsl:for-each select="$corpus//move/type='Fire'">
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="//type">
        <xsl:result-document href="fire.txt"/>
    </xsl:template>
    
</xsl:stylesheet>