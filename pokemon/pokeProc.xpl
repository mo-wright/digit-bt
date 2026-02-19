<?xml version="1.0" encoding="UTF-8"?>
<p:declare-step name="pokemonSorting" xmlns:p="http://www.w3.org/ns/xproc"
    exclude-inline-prefixes="#all" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ex="extensions"
    xmlns:cx="http://xmlcalabash.com/ns/extensions" xmlns:c="http://www.w3.org/ns/xproc-step"
    version="3.0">

    <p:directory-list name="moveColl" path="moves" detailed="true"/>
    <!-- Only 9 generations of Pokemon, no generation zero -->

    <p:for-each>

        <p:with-input select="//c:file"/>
        <p:variable name="filename" as="xs:string"
            select="//c:file/@name ! substring-before(., '.txt')"/>
        <p:load href="moves/{//c:file/@name}"/>
        <p:invisible-xml cx:processor="markup-blitz">
            <p:with-input port="grammar">
                <p:document href="moWrightPokemonSolution.ixml" content-type="text/plain"/>
            </p:with-input>
        </p:invisible-xml>
        <p:identity message="Finished a markup application"/>
        <p:store name="simple-XML" href="formatted/{$filename}.xml"/>
    </p:for-each>
   <!-- <p:xslt>
        <p:with-input port="stylesheet" href="combine.xsl"/>
    </p:xslt>
    <p:identity message="Got fire moves"/> -->
</p:declare-step>
