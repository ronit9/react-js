#include <stdio.h>

int main(int argc, char const *argv[])
{
    int size;
    printf("enter size of array: ");
    scanf("%d", &size);

    int arr[size];

    for (int i = 0; i < size; i++)
    {
        printf("enter %d elment:-", i + 1);
        scanf("%d", &arr[i]);
    }
    printf("array is:- ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    int last = arr[size - 1];

    for (int i = size - 1; i > 0; i--)
    {
        arr[i] = arr[i - 1];
    }

    arr[0] = last;
    printf("\narray is:- ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
