from django.urls import path
from .views import (
    UserListCreateView, UserProfileListCreateView, UserProfileRetrieveUpdateDestroyView, UserRetrieveUpdateDestroyView,
    DestinationListCreateView, DestinationRetrieveUpdateDestroyView,
    PackageListCreateView, PackageRetrieveUpdateDestroyView,
    BookingListCreateView, BookingRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),

    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('userprofiles/<int:pk>/', UserProfileRetrieveUpdateDestroyView.as_view(), name='userprofile-detail'),

    path('destinations/', DestinationListCreateView.as_view(), name='destination-list-create'),
    path('destinations/<int:pk>/', DestinationRetrieveUpdateDestroyView.as_view(), name='destination-detail'),

    path('packages/', PackageListCreateView.as_view(), name='package-list-create'),
    path('packages/<int:pk>/', PackageRetrieveUpdateDestroyView.as_view(), name='package-detail'),

    path('bookings/', BookingListCreateView.as_view(), name='booking-list-create'),
    path('bookings/<int:pk>/', BookingRetrieveUpdateDestroyView.as_view(), name='booking-detail'),

]
