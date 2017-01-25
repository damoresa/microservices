FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
EXPOSE 8080
ADD configserver.jar app.jar
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]