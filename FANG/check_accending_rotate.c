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
    int count = 0;

    for (int i = 0; i < size; i++)

    {
        if (arr[i] > arr[i + 1])

        {

            count++;
        }
    }

    if (arr[size - 1] > arr[0])
    {
        count++;
    }
    if (count== 1)
    {
        printf("accending");
    }
    else
    {
        printf("not accending");
    }
    return 0;
}
