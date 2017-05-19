walk(document.body);


function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }


	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bdonald trump\b/g, "Agent Orange");
	v = v.replace(/\bdonald Trump\b/g, "Hair Furher");
	v = v.replace(/\bDonald trump\b/g, "Tangerine Cockholster");
	v = v.replace(/\bDonald Trump\b/g, "Cheeto-In-Chief");
	v = v.replace(/\bDonald John Trump\b/g, "The Angry Orange Creamsicle");
	v = v.replace(/\bDonald J Trump\b/g, "Mango Mussolini");
	v = v.replace(/\bDonald J. Trump\b/g, "Fuckface Von Clownstick");
	v = v.replace(/\bTrump\b/g, "Tiny Hands");
	v = v.replace(/\bPresident Trump\b/g, "President Cock Holster");

	textNode.nodeValue = v;
}


