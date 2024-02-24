# back
# устанавливаем самую лёгкую версию JVM
FROM openjdk:17-jdk-alpine

# указываем ярлык. Например, разработчика образа и проч. Необязательный пункт.
LABEL maintainer="pemonce"

# внешний порт, по которому наше приложение будет доступно извне
EXPOSE 8099

# указываем, где в нашем приложении лежит джарник
ARG JAR_FILE=build/libs/wedd-0.0.1-SNAPSHOT.jar

# добавляем джарник в образ под именем rebounder-chain-backend.jar
ADD ${JAR_FILE} rebounder-chain-backend.jar

# команда запуска джарника
ENTRYPOINT ["java","-jar","/rebounder-chain-backend.jar"]