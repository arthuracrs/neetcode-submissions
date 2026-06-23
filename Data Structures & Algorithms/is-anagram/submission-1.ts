class Solution {
    merge(array1, array2) {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < array1.length && j < array2.length) {
            if (array1[i] < array2[j]) {
                result.push(array1[i]);
                i++;
            } else {
                result.push(array2[j]);
                j++;
            } 
        }

        return result.concat(array1.slice(i)).concat(array2.slice(j))
    }

    split(array) {
        const midpoint = Math.floor(array.length / 2);

        const left = array.slice(0, midpoint);
        const right = array.slice(midpoint);

        return [left, right];
    }

    mergeSort(array) {
        if(array.length <= 1) return array

        const [left, right] = this.split(array)

        return this.merge(this.mergeSort(left), this.mergeSort(right))
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedS = this.mergeSort(s.split(''))
        const sortedT = this.mergeSort(t.split(''))

        return sortedS.join('') == sortedT.join('')

    }
}
