#include <stdio.h>
/* global variable declarations */
int a = 10, b = 20, c, e;
/* function declaration */
int non_local(int c);
/* main - displays the value of e = c + d */
int main(void)
{
	c = a + b;
	
	printf("The value of e is %d\n", non_local(c)); 
	return (0);
} 
/* non_local - computes and returns e = c + d */ 
int non_local(int c)
{
	int d = 30;

	e = c + d;		
	return (e);
}

