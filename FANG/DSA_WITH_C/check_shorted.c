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
    int notshorted = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > arr[i + 1])

            notshorted = 1;
        break;
    }
    printf("\n");
    printf("shortedis:-%d", notshorted);
    if (notshorted == 1)
    {
        printf("\narray is not shorted");
    }
    else
    {
        printf("\narray is shorted");
    }

    return 0;
}
