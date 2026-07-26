from django.shortcuts import render

def singin(request):
    return render(request, 'login/singin.html')
