node("ci-node"){
    stage("checkout"){
        checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/sidisaidkarim/annonce_angular']])
    }

     stage("build") {
        sh "npm install"
        sh "npm run build"
    }

    stage("build-image") {
        sh "sudo docker build -t angular-annonces-ui ."
    }

    stage("push-registry") {
        withCredentials([usernamePassword(credentialsId: 'sskarim_docker_hub_password', usernameVariable: 'username',
                passwordVariable: 'password')]) {
            sh "sudo docker login -u sskarim -p $password"
            sh "sudo docker tag angular-annonces-ui sskarim/angular-annonces-ui:1.0"
            sh "sudo docker push sskarim/angular-annonces-ui:1.0"
            sh "sudo docker rmi sskarim/angular-annonces-ui:1.0"
            sh "sudo docker rmi angular-annonces-ui"
        }
        stash includes: "docker-compose.yml", name: "docker-stash-file"
    }

    node("apps-integration") {
        stage("deploy") {
            unstash "docker-stash-file"
            try {
                sh "sudo docker-compose down"
                sh "sudo docker-compose pull"
                sh "sudo docker-compose up -d"
            } catch (Exception e) {
                print("No container running.")
                sh "sudo docker-compose pull"
                sh "sudo docker-compose up -d"
            }
        }
    }
}