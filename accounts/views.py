from django.shortcuts import render

# Create your views here.
# app_name/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model


@csrf_exempt
def login_with_mobile(request):
    if request.method == "POST":
        data = json.loads(request.body)
        mobile = data.get("student_mobile")
        password = data.get("password")

        user = authenticate(request, student_mobile=mobile, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful", "user_id": user.id, "role": user.role})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=401)

@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logged out"})


# app_name/views.py

CustomUser = get_user_model()


@csrf_exempt
def register_user(request):
    if request.method == "POST":
        # لو الفورم جاي من الـ HTML
        if request.content_type == "application/x-www-form-urlencoded" or request.content_type.startswith("multipart"):
            student_mobile = request.POST.get("student_mobile")
            password = request.POST.get("password")
            first_name = request.POST.get("first_name", "")
            last_name = request.POST.get("last_name", "")
            role = request.POST.get("role", "student")
            parent_mobile = request.POST.get("parent_mobile", "")
            age = request.POST.get("age")
            address = request.POST.get("address", "")
            city = request.POST.get("city", "")

            if CustomUser.objects.filter(student_mobile=student_mobile).exists():
                return render(request, "register.html", {"error": "Mobile already registered!"})

            user = CustomUser.objects.create_user(
                student_mobile=student_mobile,
                password=password,
                first_name=first_name,
                last_name=last_name,
                role=role,
                parent_mobile=parent_mobile,
                age=age,
                address=address,
                city=city
            )
            return render(request, "register.html", {"success": "Account created successfully!"})

        # لو POST جاي JSON (من API أو Postman)
        try:
            data = json.loads(request.body)

            student_mobile = data.get("student_mobile")
            password = data.get("password")
            first_name = data.get("first_name", "")
            last_name = data.get("last_name", "")
            role = data.get("role", "student")
            parent_mobile = data.get("parent_mobile", "")
            age = data.get("age")
            address = data.get("address", "")
            city = data.get("city", "")

            if CustomUser.objects.filter(student_mobile=student_mobile).exists():
                return JsonResponse({"error": "Mobile already registered"}, status=400)

            user = CustomUser.objects.create_user(
                student_mobile=student_mobile,
                password=password,
                first_name=first_name,
                last_name=last_name,
                role=role,
                parent_mobile=parent_mobile,
                age=age,
                address=address,
                city=city
            )
            return JsonResponse({"message": "User registered successfully", "id": user.id})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    # GET Request → عرض صفحة التسجيل
    return render(request, "register.html")

# views.py
from django.shortcuts import render, redirect
from django.contrib import messages

def login_view(request):
    if request.method == "POST":
        phone_number = request.POST.get("phone_number")
        password = request.POST.get("password")

        try:
            user = CustomUser.objects.get(student_mobile=phone_number)
        except CustomUser.DoesNotExist:
            messages.error(request, "رقم الهاتف غير مسجل.")
            return render(request, "login.html")

        user = authenticate(request, username=user.username, password=password)

        if user is not None:
            login(request, user)
            return redirect("home")  # غيرها لاسم الصفحة الرئيسية عندك
        else:
            messages.error(request, "كلمة المرور غير صحيحة.")
            return render(request, "login.html")

    # لو GET → اعرض صفحة تسجيل الدخول
    return render(request, "login.html")
