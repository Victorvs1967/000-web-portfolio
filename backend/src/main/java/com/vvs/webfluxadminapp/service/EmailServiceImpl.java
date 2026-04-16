package com.vvs.webfluxadminapp.service;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.vvs.webfluxadminapp.dto.EmailResponseDto;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

  private final EmailConfig config;

  @Override
  public Mono<Void> sendMail(EmailResponseDto email) {
    Properties properties = new Properties();
    properties.put("mail.transport.protocol", "smtp");
    properties.put("mail.smtp.host", config.getHost());
    properties.put("mail.smtp.port", config.getPort());
    properties.put("mail.smtp.ssl.enable", config.getSsl());
    properties.put("mail.smtp.starttls.enable", config.getTtls());
    properties.put("mail.smtp.auth", config.getAuth());

    Session session = Session.getInstance(properties, new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(config.getUsername(), config.getPassword());
      }
    });
    session.setDebug(config.getDebug());

    try {
      MimeMessage message = new MimeMessage(session);
      message.setFrom(new InternetAddress(config.getUsername()));
      message.addRecipient(RecipientType.TO, new InternetAddress(config.getUsername()));
      message.setSubject(email.getSubject());
      message.setContent(email.getMessage(), "text/html");

      Transport.send(message);
    } catch (MessagingException e) {
      e.printStackTrace();
    }
    return Mono.empty();
  }

}
