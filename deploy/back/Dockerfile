FROM openjdk:17-jdk-alpine

ENV LC_ALL=C.UTF-8

ENV TZ=Europe/Moscow
RUN yum -y install tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN chmod +x /default/run.sh
ENTRYPOINT ["/image/run.sh"]