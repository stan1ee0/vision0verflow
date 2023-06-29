package org.vision0.vision0verflow.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.user.dto.UserPatch;
import org.vision0.vision0verflow.user.dto.UserPost;
import org.vision0.vision0verflow.user.dto.UserResponse;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public UserResponse postUser(@RequestBody UserPost userPost) {
        User registeredUser = userService.register(new User(userPost));

        return new UserResponse(registeredUser);
    }

    @GetMapping("/users")
    public List<UserResponse> getUsers() {
        List<User> allUsers = userService.findAll();

        return allUsers.stream()
                .map(user -> new UserResponse(user))
                .collect(Collectors.toList());
    }

    @GetMapping("/users/{user-id}")
    public UserResponse getUser(@PathVariable("user-id") long userId) {
        User foundUser = userService.find(userId);

        return new UserResponse(foundUser);
    }

    @PatchMapping("/users/{user-id}")
    public UserResponse patchUser(@PathVariable("user-id") long userId,
                                  @RequestBody UserPatch userPatch) {
        User updatedUser = userService.update(userId, new User(userPatch));

        return new UserResponse(updatedUser);
    }

    @DeleteMapping("/users/{user-id}")
    public UserResponse deleteUser(@PathVariable("user-id") long userId) {
        User terminatedUser = userService.terminate(userId);

        return new UserResponse(terminatedUser);
    }

    @PostConstruct
    public void setInitialUsers() {
        userService.register(new User("vision@verflow.org", "Vision0"));
        userService.register(new User("test@verflow.org", "Test0"));
    }
}
