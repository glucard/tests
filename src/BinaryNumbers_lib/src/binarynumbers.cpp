#include "binarynumbers.h"

namespace binarynumbers {
	vector::Vector intToBinary(int n) {
		int lenght, exp, i;

		lenght = 1;
		exp = 2;
		while (exp < n) {
			exp *= 2;
			lenght++;
		}

		vector::Vector b(vector::INT, lenght);

		b.data
	}
}