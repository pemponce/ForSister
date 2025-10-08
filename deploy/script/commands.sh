#!/bin/bash


PASSWORD="a785410a"

execute_with_sudo() {
    echo "$PASSWORD" | sudo -S "$@"
}

ls

echo YA GOMOSEK

echo "$PASSWORD" | sudo -S mv ~/docker-compose.yml /home/bot/
echo YA GOMOSEK

cd ../bot
echo "$PASSWORD" | sudo -S mkdir -p image
echo "$PASSWORD" | sudo -S mv ~/Dockerfile /home/bot/image/
echo YA GOMOSEK

cd image
echo "$PASSWORD" | sudo -S mkdir -p default
echo "$PASSWORD" | sudo -S mv ~/zakaz-0.0.1-SNAPSHOT.jar /home/bot/image/default
echo "$PASSWORD" | sudo -S mv ~/run.sh /home/bot/image/default
echo YA GOMOSEK

cd ../

echo "$PASSWORD" | sudo -S apt install snapd
echo "$PASSWORD" | sudo -S snap install --classic certbot
echo "$PASSWORD" | sudo -S ln -s /snap/bin/certbot /usr/bin/certbot
certbot --version

echo "$PASSWORD" | sudo -S apt update
echo "$PASSWORD" | sudo -S apt install snapd
echo "$PASSWORD" | sudo -S snap install --classic certbot
echo "$PASSWORD" | sudo -S ln -s /snap/bin/certbot /usr/bin/certbot
echo "$PASSWORD" | sudo -S certbot certonly --standalone
echo "$PASSWORD" | sudo -S certbot certonly --webroot
echo "$PASSWORD" | sudo -S certbot renew --dry-run

docker compose up -d
docker attach zakaz