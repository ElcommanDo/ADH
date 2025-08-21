from django.shortcuts import render, get_object_or_404, redirect
from courses.models import Course, Category
from .models import Expert, New, StudnetsReview
# Create your views here.

def home(request):
    news = New.objects.all()
    if len(news) >6:
        news = list(news[0:6])
    return render(request, 'index.html',
                  {
                      "courses": Course.objects.filter(is_active=True),
                      "categories": Category.objects.all(),
                      "experts": Expert.objects.all(),
                      "reviews": StudnetsReview.objects.all(),
                      "news": news
                      
                  })


from django.shortcuts import render

def page_not_found(request, exception):
    return render(request, "404.html", status=404)

handler404 = page_not_found

def courses(request):
    return render(request, 'courses.html', {
        "courses": Course.objects.all(),
        "categories": Category.objects.all(),
        
    })


def course_details(request, pk):
    try:
        course = get_object_or_404(Course, pk=pk)
    except:
        return redirect("courses_list")
    return render(request, 'course_details.html', {
        "course": course
    })