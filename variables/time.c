#include <stdio.h>

int times(void);
int main(void)
{
        printf("Number of function executions: %d\n", times());
        printf("Number of function executions: %d\n", times());
        return (0);
}
int times(void)
{
        static int time = 0;
        time++;
        return (time);
}

