# Generated by Django 4.1 on 2023-10-04 19:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blogapis", "0004_alter_post_timestamp"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="timestamp",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 10, 4, 19, 45, 53, 81385)
            ),
        ),
        migrations.DeleteModel(
            name="User",
        ),
    ]
