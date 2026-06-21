FROM eclipse-temurin:17-jdk

VOLUME /temp
ARG JAR_FILE=target/*.jar

ADD . /app
WORKDIR /app

RUN ./mvnw clean package -DskipTests
RUN mv ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT java -jar app.jar