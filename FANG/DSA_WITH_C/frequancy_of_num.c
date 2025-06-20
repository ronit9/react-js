#include <stdio.h>

int main(int argc, char const *argv[])
{
    int size;
    printf("enter size of array: ");
    scanf("%d", &size);

    int arr[size], visit[size];

    for (int i = 0; i < size; i++)
    {
        printf("enter %d element: ", i + 1);
        scanf("%d", &arr[i]);
        visit[i] = 0;
    }

    for (int i = 0; i < size; i++)
    {
        if (visit[i] == 1)
        {
            continue;
        }
        int count = 1;
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] == arr[j])
            {
                count++;
                visit[j] = 1;
            }
        }

        printf("%d occurs %d times\n", arr[i], count);
        }

    return 0;
}
