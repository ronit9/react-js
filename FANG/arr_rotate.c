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
    int start = 0;
    int end = size - 1;
    for (int i = start; i < size; i++)
    {
        for (int j = end; i < size; i++)
        {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    return 0;
}
