# Organizing Pokemon Moves with ixml!
## Your task
You'll be returning to  the `pokemon-moves-gen5.txt` file to the contained Pokemon moveset data using invisible XML. For each move, separate the data by category, and nest those elements under a `<move>` element. 
Your xml output should look similar to this:

```
<xml>
    <move>
        <name>Name of Move</name>
        <type>Type</type>
        <cat>Category</category>
        <pow>Power</power>
        <acc>Accuracy Number</acc>
        <pp>Power Points Number</pp>      
        <effect>Description of effect</effect>        
    </move>
</xml>
```
with multiple 
## Useful Information
- Each line corresponds to one Pokemon move.
- Like with the Movie Data exercise, the data is separated by tabs. 
- The "key" in the first few lines tells you what each category represents. Feel free to discard or preserve this information.
- Sometimes, this file contains space characters before a tab character. Check the file for any sneaky whitespaces and account for this when writing your grammar.
- Power, Accuracy, and PP are always represented by a number.
- When there isn't a number in a numerical category, it is represented by an em-dash.
## Extra Challenges
- The more unambigious your code is, the better. Can you make a completely unambigious grammar?
- If you're familiar with Pokemon, try your hand at being extra specific with what your grammar allows for certain categories. Can you make it so only valid types are allowed for the `<type>` element? Think about how you can use this in a project.