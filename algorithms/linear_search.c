#include <stdio.h>

int main(void)
{
	int array[10] = {45, 54, 78, 93, 42, 0, 45, 78, -87, 0};
	int target = 0;

	for (int i = 0; i < 10; i++)
	{
		if (array[i] == target)
		{
			printf("Target found at index: %i\n", i);
			return target;
		}
	}
	return 0;
}

