from django.shortcuts import render

# Create your views here.
def home(request):
    context_dict = {}
    return render(request, 'tile_trailer_index.html', context_dict)