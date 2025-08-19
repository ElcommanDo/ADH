from django.shortcuts import render
from courses.models import Course, Category
from .models import Expert, New, StudnetsReview
# Create your views here.

def home(request):
    
    return render(request, 'index.html',
                  {
                      "courses": Course.objects.filter(is_active=True),
                      "categories": Category.objects.all(),
                      "experts": Expert.objects.all(),
                      "reviews": StudnetsReview.objects.all()
                      
                  })


from django.shortcuts import render

def page_not_found(request, exception):
    return render(request, "404.html", status=404)

handler404 = page_not_found