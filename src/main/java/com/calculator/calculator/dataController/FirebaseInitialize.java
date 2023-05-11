package com.calculator.calculator.dataController;

import java.io.File;
import java.io.FileInputStream;

import javax.annotation.PostConstruct;
import java.net.URL;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Service
public class FirebaseInitialize {

    @PostConstruct
    public void initialize() {
        ClassLoader classLoader = FirebaseInitialize.class.getClassLoader();		
        try {
            URL url = classLoader.getResource("calculatorServiceAccountKey.json");	
            File file = new File(url.toURI());
            FileInputStream serviceAccount = new FileInputStream(file.getAbsoluteFile());
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
            FirebaseApp.initializeApp(options);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}