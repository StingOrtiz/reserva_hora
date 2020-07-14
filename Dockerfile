FROM ubuntu:20.04

RUN apt-get update 
RUN apt-get upgrade -y 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
RUN npm install -g @angular/cli@8
RUN apt-get remove -y curl
RUN mkdir proyecto
#COPY ./ proyecto
#WORKDIR /proyecto
#RUN npm install
#EXPOSE 4200/tcp
#ENTRYPOINT ["ng", "serve", "--host, "0.0.0.0", "--port", "4200"]
