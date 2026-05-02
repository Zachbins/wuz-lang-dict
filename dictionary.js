let dictionaryList = [];

async function loadDictionary() {
    try {
        const response = await fetch('dictionary.txt');
        const text = await response.text();
        const lines = text.trim().split('\n');

        if (lines.length > 1) {
            const headers = lines[0].split('|').map(h => h.trim());
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split('|');
                let obj = {};
                headers.forEach((header, index) => {
                    obj[header] = values[index] ? values[index].trim() : '';
                });
                dictionaryList.push(obj);
            }


            window.dispatchEvent(new Event('dictionaryReady'));
        }
    } catch (error) {
        console.error('Error loading dictionary:', error);
    }
}

loadDictionary();
