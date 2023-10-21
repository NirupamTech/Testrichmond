/// Define the formulas for each subject
const mathFormulas = `
Math Formulas:
Sets:
1. The union of two sets A and B are said to be contained elements that are either in set A and set B. The union of A and B is denoted as, A∪B.
2. The intersection of two sets A and B are said to be contained elements that are common in both sets. The intersection of A and B is denoted as, A∩B. 
3. The complement of a set A is the set of all elements given in the universal set U that are not contained in A. The complement of A is denoted as, A’.
4. For any two sets A and B, the following holds true:(DE Morgan’s Theorem)
(A∪B)′=A′∩B′
(A∩B)′=A′∪B′
5. If the finite sets A and B are given such that, (A∩B)=ϕ, then:
n(A∪B)=n(A)+n(B)
6. If (A∪B)=ϕ, then: n(A∪B)=n(A)+n(B)−n(A∩B)
7. A – A = Ø
8. B – A = B⋂ A’
9. B – A = B – (A⋂B)
10. (A – B) = A if A⋂B =  Ø
11. (A – B) ⋂ C = (A⋂ C) – (B⋂C)
12. A ΔB = (A-B) U (B- A)
13. n(A∪B) = n(A) + n(B) – n(A⋂B)
14. n(A∪B∪C)= n(A) +n(B) + n(C) – n(B⋂C) – n (A⋂ B)- n (A⋂C) + n(A⋂B⋂C)
15. n(A – B) =  n(A∪B) – n(B)
16. n(A – B) = n(A) – n(A⋂B)
17. n(A’) = n(∪) – n(A)
18. n(U) =  n(A) + n(B) + – n(A⋂B) + n((A∪B)’)
19. n((A∪B)’) = n(U) +  n(A⋂B) – n(A) – n(B)

Relations & Functions:
1. Relations: A relation R is the subset of the cartesian product of A × B, where A and B are two non-empty elements. It is derived by stating the relationship between the first element and second element of the ordered pair of A × B.
2. Inverse of Relation: A and B are any two non-empty sets. Let R be a relationship between two sets A and B. The inverse of relation R, indicated as R-1, is a relationship that connects B and A and is defined by
R-1 ={(b, a) : (a, b) ∈ R}
where, Domain of R = Range of R-1 and Range of R = Domain of R-1.

3. Functions: A relation f from a set A to set B is said to be function, if every element of set A has one and only image in set B.
4. A cartesian product A × B of two sets A and B is given by: A × B = { (a,b) : a ϵ A, b ϵ B}
5. If (a, b) = (x, y); then a = x and b = y
6. If n(A) = x and n(B) = y, then n(A × B) = xy and A × ϕϕ = ϕϕ
7. The cartesian product: A × B ≠ B × A.
8. A function f from set A to set B considers a specific relation type where every element x in set A has one and only one image in set B. A function can be denoted as f : A → B, where f(x) = y.
9.Algebra of functions: If the function f : X → R and g : X → R; we have:
10. (f + g)(x) = f(x) + g(x) ; x ϵ X
11. (f – g)(x) = f(x) – g(x)
12. (f . g)(x) = f(x).g(x)
13. (kf)(x) = k(f(x)) where k is a real number
14. {f/g}(x) = f(x)/g(x), g(x)≠0

Trigonometric Functions:
1. f in a circle of radius r, an arc of length l subtends an angle of θ radians, then l = r×θ.
2. Radian Measure = π/180 × Degree Measure
3. Degree Measure = 180/π × Radian Measure
Trigonometric ratios:
4. sin θ = (Perpendicular (P)) / (Hypotenuse (H)).
5. cos θ = (Base (B)) / ( Hypotenuse (H)).
6. tan θ = (Perpendicular (P)) / (Base (B)).
7. cosec θ = (Hypotenuse (H)) / (Perpendicular (P)).
8. sec θ = (Hypotenuse (H)) / (Base (B)).
9. cot θ = (Base (B)) / (Perpendicular (P)).
Reciprocal Trigonometric Ratios:
10. sin θ = 1 / (cosec θ)
11. cosec θ = 1 / (sin θ)
12. cos θ = 1 / (sec θ)
13. sec θ = 1 / (cos θ)
14. tan θ =  1 / (cot θ)
15. cot θ = 1 / (tan θ)
Trigonometric Ratios of Complementary Angles:
16. sin (90° – θ) = cos θ
17. cos (90° – θ) = sin θ
18. tan (90° – θ) = cot θ
19. cot (90° – θ) = tan θ
20. sec (90° – θ) = cosec θ
21. cosec (90° – θ) = sec θ
Periodic Trigonometric Ratios
22. sin(π/2-θ) = cos θ
23. cos(π/2-θ) = sin θ
24. sin(π-θ) = sin θ
25. cos(π-θ) = -cos θ
26. sin(π+θ)=-sin θ
27. cos(π+θ)=-cos θ
28. sin(2π-θ) = -sin θ
29. cos(2π-θ) = cos θ
Trigonometric Identities
30. sin2 θ + cos2 θ = 1 ⇒ sin2 θ = 1 – cos2 θ ⇒ cos2 θ = 1 – sin2 θ
31. cosec2 θ – cot2 θ = 1 ⇒ cosec2 θ = 1 + cot2 θ ⇒ cot2 θ = cosec2 θ – 1
32. sec2 θ – tan2 θ = 1 ⇒ sec2 θ = 1 + tan2 θ ⇒ tan2 θ = sec2 θ – 1
Product to Sum Formulas
33. sin x sin y = 1/2 [cos(x–y) − cos(x+y)]
34. cos x cos y = 1/2[cos(x–y) + cos(x+y)]
35. sin x cos y = 1/2[sin(x+y) + sin(x−y)]
36. cos x sin y = 1/2[sin(x+y) – sin(x−y)]
Sum to Product Formulas
37. sin x + sin y = 2 sin [(x+y)/2] cos [(x-y)/2]
38. sin x – sin y = 2 cos [(x+y)/2] sin [(x-y)/2]
39. cos x + cos y = 2 cos [(x+y)/2] cos [(x-y)/2]
40. cos x – cos y = -2 sin [(x+y)/2] sin [(x-y)/2]
General Trigonometric Formulas:
41. sin (x+y) = sin x × cos y + cos x × sin y
42. cos(x+y)=cosx×cosy−sinx×siny
43. cos(x–y)=cosx×cosy+sinx×siny
44. sin(x–y)=sinx×cosy−cosx×siny
45. If there are no angles x, y and (x ± y) is an odd multiple of (π / 2); then:
tan (x+y) = tan x + tan y / 1 − tan x tan y
tan (x−y) = tan x − tan y / 1 + tan x tan y
46. If there are no angles x, y and (x ± y) is an odd multiple of π; then:
cot (x+y) = cot x cot y−1 / cot y + cot x
cot (x−y) = cot x cot y+1 / cot y − cot x
Formulas for twice of the angles:
47. sin2θ = 2sinθ cosθ = [2tan θ /(1+tan2θ)]
48. cos2θ = cos2θ–sin2θ = 1–2sin2θ = 2cos2θ–1= [(1-tan2θ)/(1+tan2θ)]
49. tan 2θ = (2 tan θ)/(1-tan2θ)
Formulas for thrice of the angles:
50. sin 3θ = 3sin θ – 4sin 3θ
51. cos 3θ = 4cos 3θ – 3cos θ
52. tan 3θ = [3tan θ–tan 3θ]/[1−3tan 2θ]

Principle of Mathematical Induction:
Principle of Mathematical Induction: The principle of mathematical induction is one such tool that can be used to prove a wide variety of mathematical statements. Each such statement is assumed as P(n) associated with positive integer n, for which the correctness for the case n = 1 is examined. Then assuming the truth of P(k) for some positive integer k, the truth of P (k+1) is established.
Working Rule:
Step 1: Show that the given statement is true for n = 1.
Step 2: Assume that the statement is true for n = k.
Step 3: Using the assumption made in step 2, show that the statement is true for n = k  + 1. We have proved the statement is true for n = k. According to step 3, it is also true for k + 1 (i.e., 1 + 1 = 2). By repeating the above logic, it is true for every natural number.

Complex Numbers and Quadratic Equations:
1. Complex Numbers: A number that can be expressed in the form a + b is known as the complex number; where a and b are the real numbers and i is the imaginary part of the complex number.
Imaginary Numbers: The square root of a negative real number is called an imaginary number, e.g. √-2, √-5 etc. The quantity √-1 is an imaginary unit and it is denoted by ‘i’ called iota.
i = √-1, i2 = -1, i3 = -i, i4 = 1

2. Equality of Complex Number: Two complex numbers z1 = x1 + iy1 and z2 = x2 + iy2 are equal, if x1 = x2 and y1 = y2 i.e. Re(z1) = Re(z2) and Im(z1) = Im(z2)
Algebra of Complex Numbers

3. Addition: Consider z1 = x1 + iy1 and z2 = x2 + iy2 are any two complex numbers, then their sum is defined as
z1 + z2 = (x1 + iy1) + (x2 + iy2) = (x1 + x2) + i (y1 + y2)

4. Subtraction: Consider z1 = (x1 + iy1) and z2 = (x2 + iy2) are any two complex numbers, then their difference is defined as
z1 – z2 = (x1 + iy1) – (x2 + iy2) = (x1 – x2) + i(y1 – y2)

5. Multiplication: Consider z1 = (x1 + iy1) and z2 = (x2 + iy2) be any two complex numbers, then their multiplication is defined as
z1z2 = (x1 + iy1) (x2 + iy2) = (x1x2 – y1y2) + i (x1y2 + x2y1)

6. Division: Consider z1 = x1 + iy1 and z2 = x2 + iy2 be any two complex numbers, then their division is defined as
z1/z2 = x1+iy1/x2+iy2 = (x1x2+y1y2)+i(x2y1-x1y2)/x²+y²

7. Conjugate of Complex Number

Consider z = x + iy, if ‘i’ is replaced by (-i), then it is called to be conjugate of the complex number z and it is denoted by z¯, i.e.

z̅ {Z bar → conjugate} = x - iy

8. Modulus of a Complex Number

Consider z = x + y be a complex number. So, the positive square root of the sum of square of real part and square of imaginary part is called modulus (absolute values) of z and it is denoted by |z| i.e.

|z| = √x2+y2

9. Argand Plane

Any complex number z = x + y can be represented geometrically by a point (x, y) in a plane, called argand plane or gaussian plane. 

A pure number x, i.e. (x + 0i) is represented by the point (x, 0) on X-axis. Therefore, X-axis is called real axis.
A purely imaginary number y i.e. (0 + y) is represented by the point (0, y) on the y-axis. Therefore, the y-axis is called the imaginary axis.
Argument of a complex Number

The angle made by line joining point z to the origin, with the positive direction of X-axis in an anti-clockwise sense is called argument or amplitude of complex number. It is denoted by the symbol arg(z) or amp(z).

arg(z) = θ = tan-1(y/x)

10. Principal Value of Argument
When x > 0 and y > 0 ⇒ arg(z) = θ
When x < 0 and y > 0 ⇒ arg(z) = π – θ
When x < 0 and y < 0 ⇒ arg(z) = -(π – θ)
When x > 0 and y < 0 ⇒ arg(z) = -θ
Polar Form of a Complex Number

11. When z = x + iy is a complex number, so z can be written as, 

z = |z| (cosθ + isinθ), where θ = arg(z).
which is known as the polar form. Now, when the general value of the argument is θ, so the polar form of z is written as,

z = |z| [cos (2nπ + θ) + isin(2nπ + θ)], where n is an integer.

Linear Inequalities:
1. Inequation: An inequation or inequality is a statement involving variables and the sign of inequality like >, <, ≥ or ≤.

2. Symbols used in inequalities
The symbol < means less than.
The symbol > means greater than.
The symbol < with a bar underneath ≤ means less than or equal to.
The symbol > with a bar underneath ≥ means greater than or equal to.
The symbol ≠ means the quantities on the left and right sides are not equal to.
Algebraic Solutions for Linear Inequalities in One Variable and its Graphical Representation

Using the trial-and-error method, the solution to the linear inequality can be determined. However, this method isn’t always possible, and computing the solution takes longer. So, using a numerical approach, the linear inequality can be solved. When solving linear inequalities, remember to follow these rules:

Rule 1: Don’t change the sign of an inequality by adding or subtracting the same integer on both sides of an equation.

Rule 2: Add or subtract the same positive integer from both sides of an inequality equation.

Permutations and Combinations:
1. Factorial: The continued product of first n natural number is called factorial ‘n’. It is denoted by n! which is given by,
n! = n(n – 1)(n – 2)… 3 × 2 × 1 and 0! = 1! = 1

2. Permutations: Permutation refers to the various arrangements that can be constructed by taking some or all of a set of things. The number of an arrangement of n objects taken r at a time, where 0 < r ≤ n, denoted by nPr is given by
nPr = n! / (n−r)!

3. The number of permutation of n objects of which p1 are of one kind, p2 are of second kind,… pk are of kth kind such that p1 + p2 + p3 + … + pk = n is
n! / p1! p2! p3! ….. pk!

4. Combinations: Combinations are any of the various selections formed by taking some or all of a number of objects, regardless of their arrangement. The number of r objects chosen from a set of n objects is indicated by nCr, and it is given by
nCr = n! / r!(n−r)!

5. Relation Between Permutation and combination: The relationship between the two concepts is given by two theorems as,
nPr = nCr r! when 0 < r ≤ n.
nCr + nCr-1 = n+1Cr

Binomial Theorem:
1. Binomial Theorem: The expansion of a binomial for any positive integer n is given by Binomial Theorem, which is
(a + b)n = nC0 an + nC1 an-1 b + nC2 an-2 b2 + … + nCn-1 a bn-1 + nCn bn

2. Some special cases from the binomial theorem can be written as:
(x – y)n = nC0 xn – nC1 xn-1 y + nC2 xn-2 y2 + … + (-1)n nCn xn
(1 – x)n = nC0 – nC1 x + nC2 x2 – …. (-1)n nCn xn
nC0 = nCn = 1
3. Pascal’s triangle: The coefficients of the expansions are arranged in an array called Pascal’s triangle.
General Term of following expansions are:
(a + b)n is Tr+1 = nCr an−r.br
(a – b)n is (-1)r nCr an−r.br
(1 + x)n = nCr . xr
(1 – x)n = (-1)r nCn xr
4. Middle Terms: In the expansion (a + b)n, if n is even, then the middle term is the (n/2 + 1)th term. If n is odd, then the middle terms are (n/2 + 1)th and ((n+1)/2+1)th terms.

Sequences and Series:
1. Progression: A sequence whose terms follow certain patterns is known as progression.
Arithmetic Progression (AP): An arithmetic progression (A.P.) is a sequence where the terms either increase or decrease regularly by the same constant. This constant is called the common difference (d). The first term is denoted by a and the last term of an AP is denoted by l.
For an Arithmetic Series: a, a+d, a+2d, a+3d, a+4d, …….a +(n-1)d
2. The first term: a1 = a,
The second term: a2 = a + d,
The third term: a3 = a + 2d,
3. The nth term: an = a + (n – 1)d
nth term of an AP from the last term is a’n =an – (n – 1)d.
an + a’n = constant
4. Common difference of an AP i.e. d = an – an-1, ∀ n>1.
Sum of n Terms of an AP: Sn = n/2 [2a + (n – 1)d] = n/2 (a1+ an)
A sequence is an AP If the sum of n terms is of the form An2 + Bn, where A and B are constant and A = half of common difference i.e. 2A = d.
an =Sn – Sn-1

5. Arithmetic Mean: If a, A and b are in A.P then A = (a+b)/2 is called the arithmetic mean of a and b. If a1, a2, a3,……an are n numbers, then their arithmetic mean is given by: A = (a1+a2+a3+....+an)/n
The common difference is given as, d = (b – a)/(n + 1)
The Sum of n arithmetic mean between a and b is, n (a+b/2).
Geometric Progression (GP): A sequence in which the ratio of two consecutive terms is constant is called geometric progression.
The constant ratio is called common ratio (r).
i.e. r = an+1/an, ∀ n>1
The general term or nth term of GP is an =arn-1
nth term of a GP from the end is a’n = 1/rn-1, l = last term
If a, b and c are three consecutive terms of a GP then b2 = ac.
Geometric Mean (GM): If a, G and b are in GR then G is called the geometric mean of a and b and is given by G = √(ab).
If a,G1, G2, G3,….. Gn, b are in GP then G1, G2, G3,……Gn are in GM’s between a and b, then
common ratio is: r = (b/a)^{1/n+1}
If a1, a2, a3,…, an are n numbers are non-zero and non-negative, then their GM is given by
GM = (a1 . a2 . a3 …an)1/n
Product of n GM is G1 × G2 × G3 ×… × Gn = Gn = (ab)n/2
Sum of first n natural numbers is: Σn = 1 + 2 + 3 +… + n = n(n+1)/2
Sum of squares of first n natural numbers is: Σn2 = 12 + 22 + 32 + … + n2 = n(n+1)(2n+1)/6
Sum of cubes of first n natural numbers is: Σn3 = 13 + 23 + 33 + .. + n3 = (n(n+1)(2n+1)/6)^2

Limits and Derivatives:
1. Limit: Let y = f(x) be a function of x. If at x = a, f(x) takes indeterminate form, then we consider the values of the function which is very near to a. If these value tend to a definite unique number as x tends to a, then the unique number so obtained is called the limit of f(x) at x = a and we write it as limx→a f(x)    .
2. Left Hand and Right-Hand Limits: If values of the function at the point which are very near to a on the left tends to a definite unique number as x tends to a, then the unique number so obtained is called the left-hand limit of f(x) at x = a, we write it as
f(a-0)=limx→a− f(x) = limh→0f(a-h)

Similarly, right hand limit is given as,
f(a+0)=limx→a+ f(x) = limh→0 f(a+h)

A limit limx→a f(x) exists when:
limx→a− f(x) and limx→a+ f(x) both exists or,

limx→a− f(x) = limx→a+ f(x)

Some Important Properties of Limits: Consider f and g be two functions such that both limx→a f(x) and limx→a g(x) exists, then:
limx→a [f(x) ± g(x)] = limx→a f(x) ± limx→a g(x)
limx→a kf(x) = k*{limx→a f(x)}
limx→a f(x)*g(x) = limx→a f(x) * limx→a g(x)
limx→a {f(x)/g(x)} = {limx→a f(x)/limx→a g(x)}

Some Standard Limits are given as:
limx→a {x^n - a^n}/x-a = n(a)^n-1
limx→0 sinx/x = 1
limx→0 tanx/x = 1
limx→0 {a^x - 1}/x = ln(a) {ln(a) means log(a) to the base "e"}
limx→0 {e^x - 1}/x = 1
limx→0 log(1+x)/x = 1

Derivatives: Consider a real-valued function f, such that:
f'(x) = limh→0 {f(x+h)-f(x)}/h
is known as the Derivative of function f at x if and only if,
limh→0 {f(x+h)-f(x)}/h exists finitely.

Some Important Properties of Derivatives: Consider f and g be two functions such that their derivatives can be defined in a common domain as:
d/dx[f(x)+g(x)] = d/dx[f(x)] + d/dx[g(x)]
d/dx[f(x)-g(x)] = d/dx[f(x)] - d/dx[g(x)]
d/dx[f(x)*g(x)] = d/dx[f(x)]*g(x) + d/dx[g(x)]*f(x)
d/dx[f(x)/g(x)] = {d/dx[f(x)]*g(x) - d/dx[g(x)]*f(x)}/{[g(x)]^2}

Some Standard Derivatives are given as:
d/d(x^n) = n(x)^n-1
d/dx(sinx) = cosx
d/dx(cosx) = -sinx
d/dx(tanx) = sec^2x
d/dx(secx) = secx*tanx
d/dx(cotx) = -csc^2x
d/dx(e^x) = e^x
d/dx(a^x) = (a^x)(loga)
d/dx(logx) = 1/x
d/dx(cscx) = -cscx*cotx

Mathematical Reasoning:
Statements: A statement is a sentence which either true or false, but not both simultaneously. For example: “A triangle has four sides.”, “New Delhi is the capital of India.” are the statements.
Negation of a statement: Negation of a statement p: If p denote a statement, then the negation of p is denoted by ∼p.
Compound statement: A statement is a compound statement if it is made up of two or more smaller statements. The smaller statements are called component statements of the compound statement. The Compound statements are made by:
Connectives: “AND”, “OR”
Quantifiers: “there exists”, “For every”
Implications: The meaning of implications “If ”, “only if ”, “ if and only if ”.
“p ⇒ q” : 
p is a sufficient condition for q or p implies q.
q is necessary to condition for p. The converse of a statement p ⇒ q is the statement q ⇒ p.
p⇒ q together with its converse gives p if and only if q.
“p ⇔ q”:
p implies q (denoted by p ⇒ q)
p is a sufficient condition for q
q is a necessary condition for p
p only if q
∼q implies ∼p
Contrapositive: The contrapositive of a statement p ⇒ q is the statement ∼ q ⇒∼p.
Contradiction: If to check whether p is true we assume negation p is true.
Validating statements: Checking of a statement whether it is true or false. The validity of a statement depends upon which of the special. The following methods are used to check the validity of statements:
direct method
contrapositive method
method of contradiction
using a counterexample.

Probability:
Probability = Number of Favourable outcomes in an Event / Total number of Outcomes
Event: An event is a subset of the S (sample space). An empty set is also known as the Impossible event.
For any random experiment, let S be the sample space. The probability P is a real-valued function whose domain is the power set of S and [0, 1] is the range interval. For any event E: P(E) ≥ 0 and P(S) = 1
Mutually exclusive events: If E and F are mutually exclusive events, then: P(E ∪ F) = P(E) + P(F)
Equally likely outcomes: All outcomes with equal probability are called equally likely outcomes. Let S be a finite sample space with equally likely outcomes and A be the event. Therefore, the probability of an event A is: P(A) = n(A) / n(S), where n(A) is the number of elements on the set A and n(S) is the Total number of outcomes or the number of elements in the sample space S
Let P and Q be any two events, then the following formulas can be derived.
Event P or Q: The set P ∪ Q
Event P and Q: The set P ∩ Q
Event P and not Q: The set P – Q
P and Q are mutually exclusive if P ∩ Q = φ
Events P1, P2, . . . . . , Pn are exhaustive and mutually exclusive if P1 ∪ P2 ∪ . . . . . ∪ Pn = S and Ei ∩ Ej = φ for all i ≠ j.

Inverse Trigonometric Functions:
Inverse trigonometric functions: Inverse trigonometric functions map real numbers back to angles. e.g. Inverse of sine function denoted by sin-1 or arc sin(x) is defined on [-1,1].

Some of the important useful properties of Inverse Trigonometric Functions are:

Functions     Domain	        Range
y = sin⁻¹x	  [–1, 1]	        [−π/2,π/2]
y = cos⁻¹x	  [–1, 1]	        [0,π]
y = cosec⁻¹x	R – (–1, 1)	    [−π/2, π/2] – {0}
y = sec⁻¹x	  R – (–1, 1)	    [0,π] – {π/2, π/2}
y = tan⁻¹x	  R               (−π/2, π/2)
y = cot⁻¹x	  R               (0,π)


Self-Adjusting Trigonometric Property
Self Adjusting Inverse Trigonometric Properties are,

sin(sin⁻¹x)=x
sin⁻¹(sin x) = x
cos(cos⁻¹x) = x
cos⁻¹(cos x) = x
tan(tan⁻¹x) = x
tan⁻¹(tan x) = x
sec(sec⁻¹x) = x
sec⁻¹(sec x) = x
cosec⁻¹(cosec x) = x
cosec(cosec⁻¹x) = x
cot⁻¹(cot x) = x
cot(cot⁻¹x) = x 

Reciprocal Relations
Reciprocal Relations of the Inverse Trigonometric Relations are,

sin⁻¹(1/x) = cosec⁻¹x, x ≥ 1 or x ≤ -1
cos⁻¹(1/x) = sec⁻¹x, x ≥ 1 or x ≤ -1
tan⁻¹(1/x) = cot⁻¹x, x > 0
Even and Odd Functions
Even and Odd Functions of the Inverse Trigonometry Functions are,

sin⁻¹(-x) = -sin⁻¹(x), x ∈ [-1, 1]
tan⁻¹(-x) = -tan⁻¹(x), x ∈ R
cosec⁻¹x(-x) = -cosec⁻¹x(x), |x| ≥1
cos⁻¹(-x) = π – cos⁻¹(x), x ∈ [-1, 1]
sec⁻¹(-x) = π – sec⁻¹(x), |x| ≥1 
cot⁻¹(-x) = π – cot⁻¹(x), x ∈ R

Complementary Relations
The complementary relation of the Inverse trigonometry functions is,
sin⁻¹x + cos⁻¹x = π/2
tan⁻¹x + cot⁻¹x = π/2
cosec⁻¹x + sec⁻¹x = π/2

Sum and Difference Formulae
The sum and difference formulas are the important formulas used in inverse trigonometric functions, some of the important inverse trigonometric sum and difference formulas are,

tan⁻¹x + tan⁻¹y = tan⁻¹{(x+y)/(1−xy)}
tan⁻¹x – tan⁻¹y = tan⁻¹{(x-y)/(1+xy)}
sin⁻¹x  + sin⁻¹y = sin⁻¹[x√(1-y^2)+y√(1-x^2)]
sin⁻¹x – sin⁻¹y = sin⁻¹[x√(1-y^2)-y√(1-x^2)]
cos⁻¹x + cos⁻¹y = cos⁻¹[xy-√(1-x^2)√(1-y^2)]
cos⁻¹x – cos⁻¹y = cos⁻¹[xy+√(1-x^2)√(1-y^2)]
cot⁻¹x + cot⁻¹y = cot⁻¹[(xy-1)/(x+y)]
cot⁻¹x + cot⁻¹y = cot⁻¹[(xy+1)/(y-x)]

Double Angle Formula
The double angle formula for the inverse trigonometric functions is,

2tan⁻¹x = sin⁻¹(2x/1+x^2)
2tan⁻¹x = cos⁻¹(1-x^2/1+x^2)
2tan⁻¹x = tan⁻¹(2x/1-x^2)
2sin⁻¹x = sin⁻¹(2x√(1+x^2))
2cos⁻¹x = sin⁻¹(2x√(1-x^2))

Conversion Properties
The conversion properties for the inverse trigonometric function are,

sin⁻¹x = cos⁻¹(√(1-x^2) = tan⁻¹{x/x√(1-x^2)} = cot⁻¹{√(1-x^2)/x}
cos⁻¹x = sin⁻¹(√(1-x^2) = tan⁻¹{√(1-x^2)/x} = cot⁻¹{x/√(1-x^2)}
tan⁻¹x = sin⁻¹{x/√(1-x^2)} = cos⁻¹{x/√(1+x^2)} = sec⁻¹√(1+x^2) = cosec⁻¹{√(1+x^2)/x}

Matrices:
Matrix: A matrix is said to have an ordered rectangular array of functions or numbers. A matrix of order m × n consists of m rows and n columns.
Order of Matrix: If a matrix has m rows and n columns, then its order is written as m × n. If a matrix has order m × n, then it has mn elements
Square Matrix: An m × n matrix will be known as a square matrix when m = n.
Diagonal Matrix: A = [aij]m × m will be known as a diagonal matrix if aij = 0, when i ≠ j.
Scalar Matrix: A = [aij]n × n is a scalar matrix if aij = 0, when i ≠ j, aij = k, (where k is some constant); and i = j.
Identity Matrix: A = [aij]n × n is an identity matrix, if aij = 1, when i = j and aij = 0, when i ≠ j.
Zero Matrix: A zero matrix will contain all its elements as zero.
Column Matrix: A matrix which is of the form [A]n×1 is called the column matrix.
Row Matrix: A matrix that is of the form [A]1×n is called the row matrix.
A = [aij] = [bij] = B if and only if:
A and B are of the same order
aij = bij for all the certain values of i and j
Operations on Matrices: Between two or more two matrices, the following operations are defined below:
Addition of Matrix: If A = [aij]m×n and B = [yij]m×n, then A + B = [aij +bij]m×n, 1 ≤ i ≤ m, 1 ≤ j ≤ n
Subtraction of Matrix: If A = [aij]m×n and B = [bij]m×n, then A – B = [aij – bij]m×n, 1 ≤ i ≤ m, 1 ≤ j ≤ n
Multiplication of a matrix by scalar number: Let A = [aij]m×n be a matrix and k is scalar, then kA is another matrix obtained by multiplying each element of A by the scalar k, i.e. if A = [aij]m×n, then kA = [kaij]m×n
Multiplication of Matrices: Let A and B be two matrices. Then, their product AB is defined, if the number of columns in matrix A is equal to the number of rows in matrix B.

Determinants:
Determinant of a Matrix
The determinant is the numerical value of the square matrix. So, to every square matrix A = [aij] of order n, we can associate a number (real or complex) called the determinant of the square matrix A. It is denoted by det A or |A|. 

e.g. The determinant of a matrix A = [a11]1 × 1 can be given as: |a11| = a11.

Before finding the Determinant of a Matrix we must learn the Minor and Cofactor of a Matrix.

Minor
Minor of an element ay of a determinant is a determinant obtained by deleting the ith row and jth column in which element ay lies. Minor of an element aij is denoted by Mij.

Note: Minor of an element of a determinant of order n(n ≥ 2) is a determinant of order (n – 1).

Cofactor
Cofactor of an element aij of a determinant, denoted by Aij or Cij is defined as Aij = (-1)i+j Mij, where Mij is a minor of an element aij.

Value of a Determinant
Value of determinant of a matrix of order 2, 
A = |a11 a12|
    |a21 a22|
    
|A| = a11*a22 - a12*a21

Value of determinant of a matrix of order 3,
A = |a11 a12 a13|
    |a21 a22 a23|
    |a31 a32 a33|

|A| = a11(a22*a33 - a23*a32) - a12(a21*a33 - a23*a31) + a13(a21*a32 - a22*a31)

Singular and Non-Singular Matrix
If the value of the determinant corresponding to a square matrix is zero, then the matrix is said to be a singular matrix, otherwise it is a non-singular matrix, i.e. for a square matrix A, if |A| ≠ 0, then it is said to be a non-singular matrix and of |A| = 0, then it is said to be a singular matrix.

Determinant Theorems
If A and B are non-singular matrices of the same order, then AB and BA are also non-singular matrices of the same order.
The determinant of the product of matrices is equal to the product of their respective determinants, i.e. |AB| = |A||B|, where A and B are a square matrix of the same order.
Adjoint of a Matrix
The adjoint of a square matrix ‘A’ is the transpose of the matrix which is obtained by cofactors of each element of a determinant corresponding to that given matrix. It is denoted by adj(A).

In general, the adjoint of a matrix A = [aij]n×n is a matrix [Aji]n×n, where Aji is a cofactor of element aji.

Properties of Adjoint of a Matrix

If A is a square matrix of order n × n, then

A(adj A) = (adj A)A = |A| In
|adj A| = |A|n-1
adj (AT) = (adj A)T

Inverse of a Square Matrix
Let A be a non-singular matrix such that |A| ≠ 0 then the inverse of the matrix is defined as

A⁻¹ = 1/|A|*adj(A)

Properties of an Inverse Matrix

(A⁻¹)⁻¹ = A
(A^T)⁻¹=(A⁻¹)^T
(AB)⁻¹ = B⁻¹A⁻¹
(ABC)⁻¹ = C⁻¹B⁻¹A⁻¹
adj (A⁻¹) = (adj A)⁻¹

Integrals:
Integration is the inverse process of differentiation. In differential calculus, we are given a function and we have to find the derivative or differential of this function, but in integral calculus, we are to find a function whose differential is given. Thus, integration is a process that is the inverse of differentiation.

Then, ∫f(x) dx = F(x) + C, these integrals are called indefinite integrals or general integrals. C is an arbitrary constant by varying which one gets different anti-derivatives of the given function.

Derivative of a function is unique but a function can have infinite anti-derivatives or integrals.

Properties of Indefinite Integral
Various properties of the integral are,

∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx
For any real number k, ∫k f(x) dx = k∫f(x)dx.

In general, if f1, f2,………, fn are functions and k1, k2,…, kn are real numbers, then 

∫[k1f1(x) + k2 f2(x)+…+ knfn(x)] dx = k1 ∫f1(x) dx + k2 ∫ f2(x) dx+…+ kn ∫fn(x) dx
First Fundamental Theorem of Integral Calculus
Let the area function be defined as

A(x) = ∫axf(x)dx for all x ≥ a

where the function f is assumed to be continuous on [a, b]

Then A’ (x) = f (x) for every x ∈ [a, b].

Second Fundamental Theorem of Integral Calculus
Let f be the certain continuous function of x defined on the closed interval [a, b] then,

∫f(x)dx = [F(x) + C]ba = F(b)−F(a) {limits are from a to b}

Learn more about, Fundamental Theorem of Calculus

Standard Integrals Formulas
Standard Integral Formulas are,

∫x^ndx = x^n+1/(n+1) + C        (where, n ≠ −1)
∫cos x dx = sin x + C
∫sin x dx = −cos x + C
∫sec2x dx = tan x + C
∫cosec2x dx = −cot x + C
∫sec x.tan x dx = sec x + C
∫cosec x.cot x dx = −cosec x + C
∫e^xdx = ex + C
∫a^xdx = axlogea + C
∫1/x dx = log|x| + C

Other Integral Formulas
Other integral formulas that are widely used are,

∫tan x dx = log|sec x| + C
∫cot x dx = log|sin x| + C
∫sec x dx =log|sec x + tan x| + C
∫cosec x dx = log|cosec x − cot x| + C

Applications of Integrals:
This chapter included topics like how to find the area of different geometrical figures such as circles, parabolas, and ellipses.  The area enclosed by the curve y = f (x); x-axis and the lines x = a and x = b (b > a) is given by the formula,

Area = ∫y.dx  =∫f(x).dx {limits are from a to b}
Area of the region bounded by the curve x = φ (y) as its y-axis and the lines y = c, y = d is given by the formula:

Area = ∫x.dy = ∫ϕ(y).dy {limits are from c to d}
The area enclosed in between the two given curves y = f (x), y = g (x), and the lines x = a, x = b is given by the following formula:

Area = ∫[f(x)−g(x)].dx, {limits are from a to b} {where, f(x) ≥ g(x) in [a,b]}
If f (x) ≥ g (x) in [a, c] and f (x) ≤ g (x) in [c, b], a < c < b, then the resultant area between the curve is given as,

Area=∫[f(x)−g(x)].dx, + ∫[g(x)−f(x)].dx {limits from a to c → a to b + b to c}

Probability:
The possibility of an event or outcome occurring dependent on the occurrence of a preceding event or outcome is known as conditional probability. It simply depends on any previous occurrence that has already occurred. Consider two events A and B with the same sample space of a random experiment, then the conditional probability of the event A gives that B has occurred, i.e. P(A|B) is,
P(A|B) = P(A ∩ B)/P(B)

(for P(B) ≠ 0).

When E and F are the events of a sample space S of an experiment: P(S|F) = P(F|F) = 1
When A and B are any two events in a sample space S and F an event of S, such that P(F)≠0: P((A ∪ B)|F) = P(A|F) + P(B|F) – P((A ∩ B)|F)
P(E′|F) = 1 − P(E|F)
Multiplication Rule: Consider two events such as, E and F from a sample space S. Here, the set E ∩ F denotes the event that both E and F have occurred. Or we can say, E ∩ F represents the simultaneous occurrence of the events E and F. The event E ∩ F is also written as EF. According to this rule, if E and F are the events in a sample space, then;

P(E ∩ F) = P(E) P(F|E) = P(F) P(E|F)

where P(E) ≠ 0 and P(F) ≠ 0.

Similarly, for three events E, F, and G from a sample S:

P(E ∩ F ∩ G) = P(E) P(F|E) P(G|(E ∩ F)) = P(E) P(F|E) P(G|EF)  

Independent Events: Two experiments are said to be independent if the probability of the events E and F occurring simultaneously when the two experiments are performed is the product of P(E) and P(F) calculated separately on the basis of two experiments, i.e., for every pair of events E and F, where E is associated with the first experiment and F with the second experiment.

P (E ∩ F) = P (E).P(F)

Baye’s Theorem: A set of events E1, E2, …, En is said to denote a partition of the sample space S when,

Ei ∩ Ej = φ, i ≠ j, i, j = 1, 2, 3, …, n
E1 ∪ Ε2 ∪ … ∪ En = S and
P(Ei )> 0 for all i = 1, 2, …, n.

Theorem of Total Probability: Let E1, E2, …., En be the partition of a sample space and A be any event; then,

P(A) = P(E1) P (A|E1) + P (E2) P (A|E2) + … + P (En) . P(A|En)

`;

const physicsFormulas = `
Physics Formulas:
Formula 1: ...
Formula 2: ...
`;

const chemistryFormulas = `
Chemistry Formulas:
Formula 1: ...
Formula 2: ...
`;

const bioFormulas = `
Biology Formulas:
Formula 1: ...
Formula 2: ...
`;

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  switch (subject) {
    case 'math':
      return mathFormulas;
    case 'physics':
      return physicsFormulas;
    case 'chemistry':
      return chemistryFormulas;
    case 'bio':
      return bioFormulas;
    default:
      return 'Formulas for this subject are not available.';
  }
}

// Make the function accessible globally
window.getFormulasBySubject = getFormulasBySubject;
