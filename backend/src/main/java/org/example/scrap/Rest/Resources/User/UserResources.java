package org.example.scrap.Rest.Resources.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.example.scrap.Core.User.User;

@Getter
@AllArgsConstructor
public class UserResources {
    private final String id;
    private final String phoneNumber;
    private final String email;

    public UserResources(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
    }
}