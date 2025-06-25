import http from 'k6/http';
import { SharedArray } from 'k6/data';
const data = new SharedArray('BankRef', function () {
    return JSON.parse(open('../file/cid.json')).BankRef;
});

export function callback_bay_68(scenario) {
    const BankRef = data[scenario.iterationInTest];
    const url = 'https://loadtest-new-ops.inet.co.th/bay/api/v1/payment/qr/callback';
    const payload = JSON.stringify({
        trxId: ''+BankRef,
        trxStatus: '1',
        amount: '20',
        datetime: '2025-04-18T09:13:45Z',
        terminalId: '12000012131145',
        feeMerchant: '1.00 ',
        fromAccount: '123412341234',
        billerId: '010754400009425',
        channel: '4',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 300000, // 5 minutes in milliseconds
    };

    const res = http.post(url, payload, params);
    //console.log(res.body);
    return res
}
