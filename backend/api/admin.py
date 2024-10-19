from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib import admin
from .models import User
from .models import Destination,UserProfile, Package, Booking

class UserAdmin(BaseUserAdmin): 
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "first_name", "last_name", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name"]
    fieldsets = (
        (
            _("Login Credentials"), {
                "fields": ("email", "password",)
            }, 
        ),
        (
            _("Personal Information"),
            {
                "fields": ('first_name', 'last_name',)
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
            },
        ),
        (
            _("Important Dates"),
            {
                "fields": ("last_login",)
            },
        ),
    )
    add_fieldsets = (
            (None, {
                "classes": ("wide",),
                "fields": ("email", "first_name", "last_name", "password1", "password2", "is_staff", "is_active"),
            },),
        )
readonly_fields = ["last_login"]
admin.site.register(User, UserAdmin)


# Registering the UserProfile model
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'user_id', 'gender', 'city', 'is_active', 'created_at')
    search_fields = ('first_name', 'last_name', 'city')
    list_filter = ('gender', 'is_active', 'created_at')

# Registering the Destination model
@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'city', 'is_active', 'created_at')
    search_fields = ('name', 'country', 'city')
    list_filter = ('country', 'is_active')

# Registering the Package model
@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('name', 'destination_id', 'price', 'rating', 'duration', 'is_active', 'created_at')
    search_fields = ('name', 'destination_id__name', 'price', 'rating')
    list_filter = ('destination_id', 'is_active', 'rating')


# Registering the Booking model
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'package_id', 'start_date', 'total_people', 'total_price', 'is_active')
    search_fields = ('user_id__email', 'package_id__name',)
    list_filter = ('start_date', 'is_active')

