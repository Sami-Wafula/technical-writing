#include <stdio.h>
/**
 * main - declares local variables a, b and c
 * Return: 0
 */
int main(void)
{
	int a = 10, b = 20, c;

	c = a + b;
	printf("The value of a = %d, b = %d and a + b = %d\n", a, b, c);
	return (0);
}

/**
 * non_local - references a non-local variable
 * Return: 0
 */
int non_local(void)
{
	int d, e;

	e = c + d;
	printf("The value of e is %d\n", e);
	return (0);
}

