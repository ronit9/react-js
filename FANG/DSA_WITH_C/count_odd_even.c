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

    int odd = 0;
    int even = 0;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    printf("\nodd element is: %d", odd);
    printf("\neven element is: %d", even);
    return 0;
}
