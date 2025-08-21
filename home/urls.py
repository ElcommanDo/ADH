from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('courses/', views.courses, name="courses_list"),
    path('course_details/<int:pk>/', views.course_details, name="course_details")
    
]
