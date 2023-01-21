// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
// Example
// s = There's-a-starman-waiting-in-the-sky
// k = 3

// The alphabet is rotated by , matching the mapping above. The encrypted string is .
// Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Function Description

// Complete the caesarCipher function in the editor below.

// caesarCipher has the following parameter(s):

// string s: cleartext
// int k: the alphabet rotation factor
// Returns

// string: the encrypted string
// Input Format

// The first line contains the integer, , the length of the unencrypted string.
// The second line contains the unencrypted string, .
// The third line contains , the number of letters to rotate the alphabet by.

// Constraints
// 1<=n<=100
// 0<=k<=100


//  is a valid ASCII string without any spaces.

// Sample Input

// 11
// middle-Outz
// 2
// Sample Output

// okffng-Qwvb
// Explanation

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

function caesarCipher(s, k) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let rotatedAlphabet = alphabet.slice(k) + alphabet.slice(0, k);

    let result = '';
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (alphabet.indexOf(c) !== -1) {
            let rotatedIndex = (alphabet.indexOf(c) + k) % 26;
            result += rotatedAlphabet.charAt(rotatedIndex);
        } else {
            result += c;
        }
    }
    return result;
}

// OR

