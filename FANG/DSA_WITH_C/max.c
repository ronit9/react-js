#include <stdio.h>

int main(int argc, char const *argv[])
{
    int size;
    printf("enter size of array: ");
    scanf("%d", &size);

    int arr[size];

    for (int i = 0; i < size; i++)
    {
        printf("enter %d element: ", i + 1);
        scanf("%d", &arr[i]);
    }
    printf("array is: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    int max = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    printf("\nmax element is: %d", max);
    return 0;
}
