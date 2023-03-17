/*
5) Program to all operations of inset delete and traverse in Circular linked List
*/

class Node 
{ 
 	 	constructor()
 {  	 	 	
this.data = 0;  	 	 	
this.next = null; 
 	 	} 
 	} 
 
function addToEmpty(last, data) { 
 		 	 
 	 
 	if (last != null) return last; 
 		 
 	var temp = new Node(); 
 	 
 	temp.data = data;         	
      last = temp; 
 
	 	 
 	last.next = last;  	
      return last; 
} 
 
function addBegin(last, data) 
{ 
 	if (last == null) 
      return addToEmpty(last, data); 
 	var temp = new Node();  	
      temp.data = data;  	
      temp.next = last.next;  	
      last.next = temp;  	
return last; 
} 
 
function addEnd(last, data)
 {  	
if (last == null) 
return addToEmpty(last, data); 
 var temp = new Node();  	
temp.data = data;  	
temp.next = last.next;  	
last.next = temp;  	
last = temp;  	
return last; 
} 
 
function addAfter(last, data, item) {  	
if (last == null) return null; 
 	var temp, p; 
 	p = last.next; 
do { 
	 	if (p.data == item) { 
 	 	 	temp = new Node();  	 	 	
                  temp.data = data;  	 	 	
                  temp.next = p.next; 
 	 	 	p.next = temp; 
 	 	 	if (p == last)
                  last = temp; 
 	 	 	return last; 
 	 	} 
 	 	p = p.next; 
 	} 
           while (p != last.next);  
	console.log(item + " not present in the list. <br>"); 
 	return last; 
} 
 
function traverse(last) { 
 	var p; 
     	 	 
 	if (last == null) {  	 	
      console.log("List is empty.<br>"); 
 	 	return; 
 	} 
 		 
 	p = last.next;  	
	 	 
 	do { 
 	 	console.log(p.data + " "); 
 	 	p = p.next; 
 	} while (p != last.next); 
}
  
var last = null; 
last = addToEmpty(last, 6);
 last = addBegin(last, 4);
 last = addBegin(last, 2); 
last = addEnd(last, 8);
 last = addEnd(last, 12); 
last = addAfter(last, 10, 8); 
traverse(last);
