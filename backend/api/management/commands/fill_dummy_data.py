import random
from django.core.management.base import BaseCommand
from django.utils import timezone
from faker import Faker
from api.models import User, UserProfile, Destination, Package, Booking

# Instantiate the Faker module for generating dummy data
fake = Faker()

class Command(BaseCommand):
    help = 'Populate the database with large amounts of dummy data'

    def handle(self, *args, **kwargs):
        self.populate_users(10)
        self.populate_destinations(5)
        self.populate_packages(5)
        self.populate_bookings(2)

    def populate_users(self, num_users):
        for _ in range(num_users):
            first_name = fake.first_name()
            last_name = fake.last_name()
            email = fake.email()

            user = User.objects.create(
                first_name=first_name,
                last_name=last_name,
                email=email,
                is_staff=random.choice([True, False]),
                is_active=True,
                date_joined=timezone.now()
            )

            UserProfile.objects.create(
                first_name=first_name,
                last_name=last_name,
                user_id=user,
                gender=random.choice(['Male', 'Female']),
                city=fake.city(),
                is_active=True
            )

        self.stdout.write(self.style.SUCCESS(f'{num_users} Users and Profiles created successfully'))

    def populate_destinations(self, num_destinations):
        for _ in range(num_destinations):
            Destination.objects.create(
                name=fake.city(),
                country=fake.country(),
                image=None,  # Add images later if needed
                city=fake.city(),
                is_active=True
            )

        self.stdout.write(self.style.SUCCESS(f'{num_destinations} Destinations created successfully'))

    def populate_packages(self, num_packages):
        destinations = list(Destination.objects.all())
        for _ in range(num_packages):
            Package.objects.create(
                destination_id=random.choice(destinations),
                rating=round(random.uniform(3.0, 5.0), 1),
                image=None,  # Add images later if needed
                price=round(random.uniform(500, 5000), 2),
                name=fake.text(max_nb_chars=20),
                duration=random.randint(3, 15),
                description=fake.text(max_nb_chars=200),
                is_active=True
            )

        self.stdout.write(self.style.SUCCESS(f'{num_packages} Packages created successfully'))

    def populate_bookings(self, num_bookings):
        users = list(User.objects.all())
        packages = list(Package.objects.all())

        for _ in range(num_bookings):
            Booking.objects.create(
                user_id=random.choice(users),
                total_people=random.randint(1, 10),
                package_id=random.choice(packages),
                start_date=fake.date_this_year(),
                total_price=round(random.uniform(1000, 10000), 2),
                is_active=True
            )

        self.stdout.write(self.style.SUCCESS(f'{num_bookings} Bookings created successfully'))

    