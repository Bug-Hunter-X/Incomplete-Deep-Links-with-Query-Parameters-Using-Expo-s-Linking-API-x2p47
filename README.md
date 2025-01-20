# Expo Deep Link Bug

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API when handling deep links with query parameters.  The API sometimes fails to return the complete URL, leading to data loss and incorrect app behavior.

## Bug Description:

When a user opens the app via a deep link containing query parameters, the `Linking.getInitialURL()` method doesn't always return the full URL including all parameters.  This inconsistency can cause unexpected behavior, as the app may not process the intended data.

## Reproduction Steps:

1. Clone this repository.
2. Run the app using `expo start`.
3. Navigate to a deep link containing query parameters (example: `myapp://route?param1=value1&param2=value2`).
4. Observe that the returned URL from `Linking.getInitialURL()` is incomplete.

## Solution:

The solution involves using the `Linking.addEventListener` method to listen for URL changes. This approach ensures that you receive the complete URL, including all query parameters, even if the initial URL returned by `getInitialURL()` is truncated.

## How to Use the Solution:

Refer to the `bugSolution.js` file for the corrected implementation using `Linking.addEventListener`.